import React from "react";

export type CardType = {
  name: string;
  image: string;
  isVideo?: boolean;
  isLock?: boolean;
};

export type Link = {
  name: string;
  href: string;
};

export type Children = {
  children: React.ReactNode;
};

export type QuestionGroup = "role" | "companySize" | "knowUsFrom";

type AnswerValue = string | null;

export type Answer = {
  role: AnswerValue;
  companySize: AnswerValue;
  knowUsFrom: AnswerValue;
};
