'use client';

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useSVGTexture } from "./use-svg-texture";
import ShaderMaterial from "./shader-material"

const shaderSource = `
  uniform sampler2D u_svg_mask;
  uniform float u_time;
  uniform float u_opacities[10];
  uniform vec2 u_resolution;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec4 maskColor = texture(u_svg_mask, st);

    // Skip rendering this fragment if it's outside the mask
    if (maskColor.a < 0.1) {
      discard;
    }

    // Rest of your dot logic
    float opacity = u_opacities[int(mod(u_time, 10.0))];
    vec3 color = vec3(maskColor.rgb);

    // Apply the color and opacity to the fragment
    gl_FragColor = vec4(color, opacity);
  }
`;

export const CanvasRevealWithMask = ({
    svgUrl,
    ...rest
}: {
    svgUrl: string;
}) => {
    const svgTexture = useSVGTexture(svgUrl);

    return (
        <div className="h-full relative w-full">
            <Canvas className="absolute inset-0 h-full w-full">
                <ShaderMaterial
                    source={shaderSource}
                    uniforms={{
                        u_svg_mask: { value: svgTexture, type: "uniformTexture" },
                        ...rest.uniforms,
                    }}
                />
            </Canvas>
        </div>
    );
};
