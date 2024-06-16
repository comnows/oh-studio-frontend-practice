import React from "react";

export type Link = {
  name: string;
  href: string;
};

export type Children = {
  children: React.ReactNode;
};

type AnswerValue = string | null;

export type Answer = {
  role: AnswerValue;
  companySize: AnswerValue;
  knowUsFrom: AnswerValue;
};
