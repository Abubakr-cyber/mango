"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "../../data/products";

interface ProductBottleScrollProps {
    product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // 1. Scroll Progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 4. Parallax & Scale for Static Hero (New High-Quality Mode)
    const heroScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

    // 2. Preload Images (Only if NOT using static hero)
    useEffect(() => {
        if (product.staticHeroImage) {
            setImagesLoaded(true); // Immediate load for static image
            return;
        }

        const loadImages = async () => {
            setImagesLoaded(false);
            const loadedImages: HTMLImageElement[] = [];

            for (let i = 0; i < product.frameCount; i++) {
                const img = new Image();
                const frameNum = i.toString().padStart(3, "0");
                const fileName = product.fileNamePrefix
                    ? `${product.fileNamePrefix}${frameNum}.${product.fileExtension}`
                    : `${i}.${product.fileExtension}`;

                img.src = `${product.folderPath}/${fileName}`;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if error to prevent blocking
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setImagesLoaded(true);
        };

        loadImages();
    }, [product, product.staticHeroImage]);

    // 3. Canvas Rendering (Only if NOT using static hero)
    useEffect(() => {
        if (product.staticHeroImage) return;

        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Optimize for quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Render Logic
        const renderFrame = (index: number) => {
            const img = images[index];
            if (!img || !img.complete || img.naturalHeight === 0) return;

            const layoutAspectRatio = canvas.width / canvas.height;
            const imageAspectRatio = img.width / img.height;

            let renderWidth, renderHeight, offsetX, offsetY;

            // "Contain" fit logic with ZOOM to crop watermark
            const ZOOM = 1.15; // 15% zoom to push "Veo" watermark off-screen

            if (layoutAspectRatio > imageAspectRatio) {
                renderHeight = canvas.height * ZOOM;
                renderWidth = img.width * (renderHeight / img.height);
                offsetX = (canvas.width - renderWidth) / 2;
                offsetY = (canvas.height - renderHeight) / 2;
            } else {
                renderWidth = canvas.width * ZOOM;
                renderHeight = img.height * (renderWidth / img.width);
                offsetX = (canvas.width - renderWidth) / 2;
                offsetY = (canvas.height - renderHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        };

        // Responsive Canvas Sizing
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(0); // Initial render
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Animation Loop subscribed to scroll
        const unsubscribe = scrollYProgress.on("change", (latest: number) => {
            const frameIndex = Math.min(
                images.length - 1,
                Math.floor(latest * images.length)
            );
            requestAnimationFrame(() => renderFrame(frameIndex));
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            unsubscribe();
        };
    }, [images, imagesLoaded, scrollYProgress, product.staticHeroImage]);

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
                {product.staticHeroImage ? (
                    <motion.img
                        src={product.staticHeroImage}
                        alt={product.name}
                        className="block w-full h-full object-contain drop-shadow-2xl"
                        style={{ scale: heroScale, y: heroY, rotate: heroRotate }}
                    />
                ) : (
                    <canvas ref={canvasRef} className="block w-full h-full object-contain contrast-115 saturate-115 drop-shadow-2xl" />
                )}
                {/* Loading State */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
                        <div className="animate-pulse text-xl font-bold text-orange-500">Blending...</div>
                    </div>
                )}
            </div>
        </div>
    );
}
