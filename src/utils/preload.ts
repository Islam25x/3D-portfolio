import {
  avatar,
  homeless,
  Exclusive,
  Atmoscan,
  VivaDecor,
  github,
  web,
  mobile,
  backend,
  creator,
  menu,
  close,
  linkDev,
  webMaster,
  css,
  figma,
  git,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
} from "../assets";

const imageUrls = [
  avatar,
  homeless,
  Exclusive,
  Atmoscan,
  VivaDecor,
  github,
  web,
  mobile,
  backend,
  creator,
  menu,
  close,
  linkDev,
  webMaster,
  css,
  figma,
  git,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  new URL("../assets/herobg.png", import.meta.url).href,
  "/logo.png",
];

const fileUrls = [
  "/planet/scene.gltf",
  "/planet/scene.bin",
  "/planet/textures/Planet_baseColor.png",
  "/planet/textures/Clouds_baseColor.png",
  "/desktop_pc/scene.gltf",
  "/desktop_pc/scene.bin",
  "/desktop_pc/textures/Material_baseColor.jpeg",
  "/desktop_pc/textures/Material_metallicRoughness.png",
];

function preloadImage(url: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

function preloadFile(url: string) {
  return fetch(url, { cache: "force-cache" })
    .then(() => undefined)
    .catch(() => undefined);
}

export async function preloadAppAssets() {
  await Promise.allSettled([
    ...imageUrls.map(preloadImage),
    ...fileUrls.map(preloadFile),
  ]);
}
