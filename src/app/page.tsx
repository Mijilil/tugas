"use client";
import React, { useEffect } from "react";
import { useTitle } from "./ujian/Ujian/TitleContext";

function DynamicTitle() {
  const { title } = useTitle();
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}

// ...existing page code...