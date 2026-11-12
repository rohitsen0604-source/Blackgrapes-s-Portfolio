"use client";

import React from "react";
import {
  Code2,
  Globe,
  Smartphone,
  Users2,
  Network,
  Gamepad2,
  Palette,
  TrendingUp,
  ShoppingBag,
  UserCheck,
  FileText,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Smartphone,
  Users2,
  Network,
  Gamepad2,
  Palette,
  TrendingUp,
  ShoppingBag,
  UserCheck,
  FileText,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "w-5 h-5",
  size,
}) => {
  const IconComponent = ICON_MAP[name] || Code2;
  return <IconComponent className={className} size={size} />;
};
