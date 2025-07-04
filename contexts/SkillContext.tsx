import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Skill = {
  id: string;
  name: string;
  notes: string;
  image: string | null;
  practiceCount: number;
  totalMinutes: number;
};

type SkillContextType = {
  skills: Skill[];
  saveSkills: (skills: Skill[]) => Promise<void>;
};

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const stored = await AsyncStorage.getItem('skills');
      if (stored) {
        setSkills(JSON.parse(stored));
      }
    };
    loadSkills();
  }, []);

  const saveSkills = async (newSkills: Skill[]) => {
    await AsyncStorage.setItem('skills', JSON.stringify(newSkills)); // ✅ Save first
    setSkills(newSkills); // ✅ Then update state
  };

  return (
    <SkillContext.Provider value={{ skills, saveSkills }}>
      {children}
    </SkillContext.Provider>
  );
};

export const useSkillContext = () => {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error('useSkillContext must be used within a SkillProvider');
  }
  return context;
};
