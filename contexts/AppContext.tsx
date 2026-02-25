import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ChildProfile {
  name: string;
  age: number;
  interests: string[];
}

interface AppState {
  selectedInterests: string[];
  setSelectedInterests: (interests: string[]) => void;
  childProfiles: ChildProfile[];
  addChildProfile: (profile: ChildProfile) => void;
  activeContext: string;
  setActiveContext: (ctx: string) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "nature",
    "budget",
  ]);
  const [childProfiles, setChildProfiles] = useState<ChildProfile[]>([
    { name: "Leo", age: 5, interests: ["dinosaurs"] },
    { name: "Mia", age: 3, interests: ["space"] },
  ]);
  const [activeContext, setActiveContext] = useState("family");

  const addChildProfile = (profile: ChildProfile) => {
    setChildProfiles((prev) => [...prev, profile]);
  };

  return (
    <AppContext.Provider
      value={{
        selectedInterests,
        setSelectedInterests,
        childProfiles,
        addChildProfile,
        activeContext,
        setActiveContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppState must be used within AppProvider");
  return ctx;
}
