
import React from 'react';
import { BookOpen, Calculator, Beaker, Globe, Languages, FlaskConical, PenTool, Lightbulb } from 'lucide-react';
import { Subject, GradeLevel, SchoolLevel } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'maths',
    name: 'Mathématiques',
    icon: 'Calculator',
    description: 'De l’arithmétique de base à l’analyse complexe, nous rendons les maths accessibles.',
    skills: ['Logique', 'Raisonnement abstrait', 'Calcul numérique'],
    tdTypes: ['Exercices de calcul', 'Problèmes de géométrie', 'Démonstrations']
  },
  {
    id: 'physique-chimie',
    name: 'Physique-Chimie',
    icon: 'FlaskConical',
    description: 'Comprendre les lois de l’univers et la structure de la matière.',
    skills: ['Observation', 'Expérimentation', 'Modélisation'],
    tdTypes: ['Études de cas physiques', 'Équations chimiques', 'Analyses de données']
  },
  {
    id: 'svt',
    name: 'SVT',
    icon: 'Beaker',
    description: 'Explorer le vivant, la santé et l’environnement.',
    skills: ['Analyse de documents', 'Dessin d’observation', 'Synthèse biologique'],
    tdTypes: ['Interprétation de graphiques', 'Schémas fonctionnels', 'Études géologiques']
  },
  {
    id: 'francais',
    name: 'Français',
    icon: 'PenTool',
    description: 'Maîtriser la langue, l’orthographe et l’analyse littéraire.',
    skills: ['Rédaction', 'Analyse textuelle', 'Grammaire'],
    tdTypes: ['Dissertations', 'Commentaires composés', 'Dictées préparées']
  },
  {
    id: 'hist-geo',
    name: 'Histoire-Géo',
    icon: 'Globe',
    description: 'Comprendre le passé pour mieux appréhender le monde actuel.',
    skills: ['Analyse de cartes', 'Chronologie', 'Sens critique'],
    tdTypes: ['Analyses de documents historiques', 'Croquis de géographie', 'Fiches de synthèse']
  },
  {
    id: 'philo',
    name: 'Philosophie',
    icon: 'Lightbulb',
    description: 'Développer une pensée critique et structurée sur les grandes questions de l’existence.',
    skills: ['Argumentation', 'Analyse conceptuelle', 'Culture générale'],
    tdTypes: ['Dissertations philosophiques', 'Explications de textes']
  }
];

export const GRADES: GradeLevel[] = [
  {
    id: '6e',
    name: 'Sixième (6e)',
    description: 'L’entrée au collège : s’organiser et consolider les bases.',
    subjects: ['maths', 'physique-chimie', 'svt', 'francais', 'hist-geo'],
    objectives: ['Réussir sa transition vers le collège', 'Maîtriser la lecture et le calcul', 'Apprendre à apprendre'],
    category: SchoolLevel.COLLEGE
  },
  {
    id: '5e',
    name: 'Cinquième (5e)',
    description: 'Le cycle central : approfondir les méthodes de travail.',
    subjects: ['maths', 'physique-chimie', 'svt', 'francais', 'hist-geo'],
    objectives: ['Consolider les acquis de 6e', 'Découvrir la Physique-Chimie', 'Développer son autonomie'],
    category: SchoolLevel.COLLEGE
  },
  {
    id: '4e',
    name: 'Quatrième (4e)',
    description: 'Un niveau charnière pour affirmer ses compétences.',
    subjects: ['maths', 'physique-chimie', 'svt', 'francais', 'hist-geo'],
    objectives: ['Renforcer le raisonnement scientifique', 'Développer des capacités d’analyse', 'Préparer l’orientation'],
    category: SchoolLevel.COLLEGE
  },
  {
    id: '3e',
    name: 'Troisième (3e)',
    description: 'L’année du premier examen national : le BEPC / Brevet.',
    subjects: ['maths', 'physique-chimie', 'svt', 'francais', 'hist-geo'],
    objectives: ['Réussir le Brevet / BEPC', 'Finaliser son choix d’orientation', 'Maîtriser les bases du lycée'],
    examPrep: 'Préparation intensive aux épreuves du Brevet/BEPC avec simulations.',
    category: SchoolLevel.COLLEGE
  },
  {
    id: '2nde',
    name: 'Seconde (2nde)',
    description: 'Découverte du lycée et choix des spécialités.',
    subjects: ['maths', 'physique-chimie', 'svt', 'francais', 'hist-geo'],
    objectives: ['S’adapter au rythme du lycée', 'Choisir sa série (A, C, D, etc.)', 'Approfondir la méthodologie'],
    category: SchoolLevel.LYCEE
  },
  {
    id: '1ere',
    name: 'Première (1ère)',
    description: 'Préparation aux épreuves anticipées et spécialisation.',
    subjects: ['maths', 'physique-chimie', 'svt', 'francais', 'hist-geo'],
    objectives: ['Réussir le Bac de Français', 'Maîtriser les programmes de spécialité', 'Entamer le dossier post-bac'],
    examPrep: 'Accent mis sur le Français et les épreuves de fin d’année.',
    category: SchoolLevel.LYCEE
  },
  {
    id: 'tle',
    name: 'Terminale (Tle)',
    description: 'L’année du Baccalauréat et de l’orientation supérieure.',
    subjects: ['maths', 'physique-chimie', 'svt', 'philo', 'hist-geo'],
    objectives: ['Obtenir le Baccalauréat avec mention', 'Se préparer aux études supérieures', 'Maîtriser la philosophie'],
    examPrep: 'Entraînement hebdomadaire de type Bac sur toutes les matières clés.',
    category: SchoolLevel.LYCEE
  }
];

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calculator': return <Calculator className="w-6 h-6" />;
    case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
    case 'Beaker': return <Beaker className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'PenTool': return <PenTool className="w-6 h-6" />;
    case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
    default: return <BookOpen className="w-6 h-6" />;
  }
};
