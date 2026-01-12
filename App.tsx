
import React, { useState } from 'react';
import { analyzeText } from './services/geminiService';
import { FullAssessment, User } from './types';
import { MetricCard } from './components/MetricCard';
import { ComparisonModule } from './components/ComparisonModule';
import { DetectionModule } from './components/DetectionModule';
import { Login } from './components/Login';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [text, setText] = useState('');
  const [topic, setTopic] = useState('');
  const [assessment, setAssessment] = useState<FullAssessment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string