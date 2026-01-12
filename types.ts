
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ScoreMetric {
  label: string;
  score: number; // 0-100
  feedback: string;
}

export interface ContentQuality {
  relevance: ScoreMetric;
  clarityOfIdeas: ScoreMetric;
  argumentStrength: ScoreMetric;
  originality: ScoreMetric;
  wordCountCompliance: ScoreMetric;
}

export interface StylePresentation {
  formalTone: ScoreMetric;
  conciseness: ScoreMetric;
  organization: ScoreMetric;
  transitions: ScoreMetric;
  passiveActiveVoice: ScoreMetric;
}

export interface AdvancedParameters {
  sentiment: string;
  biasFairness: string;
  keywordCoverage: string[];
}

export interface FeedbackGeneration {
  grammar: string;
  clarity: string;
  vocabulary: string;
  structure: string;
}

export interface ComparisonFeedback {
  aiExpertOpinion: string;
  humanExpertOpinion: string;
}

export interface DetectionResult {
  aiProbability: number;
  humanProbability: number;
  reasoning: string;
}

export interface FullAssessment {
  contentQuality: ContentQuality;
  stylePresentation: StylePresentation;
  advancedParameters: AdvancedParameters;
  feedbackGeneration: FeedbackGeneration;
  comparison: ComparisonFeedback;
  detection: DetectionResult;
  overallScore: number;
}
