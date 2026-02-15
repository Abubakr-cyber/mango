"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
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

    // Scroll progress tracker
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 1. Preload 120 Images
    useEffect(() => {
        const loadImages = async () => {
            setImagesLoaded(false);
            const loadedImages: HTMLImageElement[] = [];
            const frameCount = 120;

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.src = `${product.folderPath}/${i}.webp`;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue on error
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setImagesLoaded(true);
            if (onLoaded) onLoaded();
        };

        loadImages();
    }, [product.folderPath, onLoaded]);

    // 2. Canvas Lifecycle & Scroll Mapping
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.imageSmoothingEnabled = true;

        const renderFrame = (index: number) => {
            const img = images[index];
            if (!img || !img.complete) return;

            // Responsive "contain" fit
            const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
            canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            renderFrame(0);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Subscribe to scroll changes using Framer Motion
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
    }, [images, imagesLoaded, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-transparent">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none">
                <canvas ref={canvasRef} className="block w-full h-full object-contain" />

                {/* Loading State Overlay */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-3xl z-[60]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            <div className="text-white text-xs font-bold tracking-[0.3em] uppercase">Loading Flavor...</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
