import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { useMemo } from "react";

export const useSVGTexture = (svgUrl: string) => {
    const svgData = useLoader(SVGLoader, svgUrl);

    const texture = useMemo(() => {
        const { paths, xml } = svgData;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) return null;

        // Extract the viewBox dimensions from the SVG XML
        const viewBox = xml.viewBox.baseVal;
        const width = viewBox.width;
        const height = viewBox.height;

        // Set the canvas size to match the SVG viewBox
        canvas.width = width;
        canvas.height = height;

        // Draw SVG paths onto the canvas
        paths.forEach((path) => {
            path.subPaths.forEach((subPath) => {
                const color = path.userData.style?.color || { r: 0, g: 0, b: 0 };
                const fillOpacity = path.userData.style?.fillOpacity ?? 1;

                context.fillStyle = `rgba(${color.r},${color.g},${color.b},${fillOpacity})`;

                const points = subPath.getPoints();
                context.beginPath();
                points.forEach((point, i) => {
                    if (i === 0) {
                        context.moveTo(point.x, point.y);
                    } else {
                        context.lineTo(point.x, point.y);
                    }
                });
                context.closePath();
                context.fill();
            });
        });

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;

        return texture;
    }, [svgData]);

    return texture;
};
