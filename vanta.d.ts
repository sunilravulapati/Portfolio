declare module 'vanta/dist/vanta.halo.min' {
  import * as THREE from 'three';
  interface VantaHaloOptions {
    el?: HTMLElement | string | null;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    xOffset?: number; // Halo specific
    yOffset?: number; // Halo specific
    baseColor?: number; // Halo specific
    backgroundColor?: number;
    color?: number; // Halo specific
    size?: number; // Halo specific
    THREE?: typeof THREE;
    // Add other Halo-specific options as needed
  }
  export default function HALO(options: VantaHaloOptions): {
    destroy: () => void;
    resize: () => void;
    // Add other methods if you use them
  };
}

declare module 'vanta/dist/vanta.rings.min' {
  import * as THREE from 'three';
  interface VantaRingsOptions {
    el?: HTMLElement | string | null;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    color?: number;
    maxDistance?: number;
    spacing?: number;
    THREE?: typeof THREE;
    // Add other Rings-specific options as needed
  }
  export default function RINGS(options: VantaRingsOptions): {
    destroy: () => void;
    resize: () => void;
  };
}

declare module 'vanta/dist/vanta.net.min' {
  import * as THREE from 'three';
  interface VantaNetOptions {
    el?: HTMLElement | string | null;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    color?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
    THREE?: typeof THREE;
    // Add other Net-specific options as needed
  }
  export default function NET(options: VantaNetOptions): {
    destroy: () => void;
    resize: () => void;
  };
}

// You can add more declare module blocks for other Vanta effects you might use,
// like 'vanta/dist/vanta.fog.min', 'vanta/dist/vanta.waves.min', etc.
// Just replace 'halo.min' with the correct file name and adjust interfaces.