import '@react-three/fiber';
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.css";

declare module '@react-three/fiber' {
    interface ThreeElements {
        primitive: any;
    }
}