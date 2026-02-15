"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Product } from "../../data/products";

interface ProductBottleScrollProps {
    product: Product;
    onLoaded?: () => void;
}

export default function ProductBottleScroll({ product, onLoaded }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // 1. Scroll Progress with Smoothing
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001
    });

    // 4. Parallax & Scale for Static Hero (New High-Quality Mode)
    const heroScale = useTransform(smoothProgress, [0, 1], [0.8, 1.2]);
    const heroY = useTransform(smoothProgress, [0, 1], [0, 200]);
    const heroRotate = useTransform(smoothProgress, [0, 1], [0, 15]);

    // 2. Preload Images (Only if NOT using static hero)
    useEffect(() => {
        if (product.staticHeroImage) {
            setImagesLoaded(true); // Immediate load for static image
            if (onLoaded) onLoaded();
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
            if (onLoaded) onLoaded();
        };

        loadImages();
    }, [product, product.staticHeroImage]); // Removed onLoaded from dependencies to avoid loop, it's a stable callback usually

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

            // V2.2: Aggressive "Cover" fit with additional zoom for a premium look
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height) * 1.2;
            renderWidth = img.width * scale;
            renderHeight = img.height * scale;

            offsetX = (canvas.width - renderWidth) / 2;
            // Slightly lower the bottle initially (move offsetY down)
            offsetY = (canvas.height - renderHeight) / 2 + (canvas.height * 0.05);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        };

        // Responsive Canvas Sizing
        const resizeCanvas = () => {
            canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
            canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            renderFrame(0); // Initial render
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Animation Loop subscribed to scroll - V2.5: Direct linear mapping
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
        <div ref={containerRef} className="relative h-[400vh] bg-transparent">
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
                {product.staticHeroImage ? (
                    <motion.img
                        src={product.staticHeroImage}
                        alt={product.name}
                        className="block w-full h-full object-contain drop-shadow-2xl"
                        style={{ scale: heroScale, y: heroY, rotate: heroRotate }}
                    />
                ) : (
                    <canvas ref={canvasRef} className="block w-full h-full object-contain contrast-115 saturate-115 drop-shadow-2xl transition-opacity duration-500" />
                )}
                {/* Loading State */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xl z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            <div className="text-white text-sm font-medium tracking-widest uppercase">Коркард...</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
