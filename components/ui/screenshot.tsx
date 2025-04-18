import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";

interface ScreenshotProps {
  srcLight: string;
  srcDark: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className,
}: ScreenshotProps) {
  const { resolvedTheme } = useTheme();
  const src = resolvedTheme === "dark" ? srcDark : srcLight;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("rounded-lg", className)}
    />
  );
}
