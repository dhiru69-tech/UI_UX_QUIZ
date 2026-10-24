export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Option {
  key: OptionKey;
  text: string;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: Option[];
  correctAnswer: OptionKey;
  explanation: string;
}

export const CATEGORIES = [
  'UI Design Fundamentals',
  'UX Laws and Psychology',
  'Accessibility and Inclusivity',
  'Usability Testing and Research',
  'UX Interviews and Case Studies',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const QUESTIONS: Question[] = [
  // CATEGORY 1: UI Design Fundamentals
  {
    id: 1,
    category: 'UI Design Fundamentals',
    question: 'What is Atomic Design, and how does it help build large design systems?',
    options: [
      { key: 'A', text: 'A method of creating animations for websites' },
      { key: 'B', text: 'A methodology that builds interfaces from small reusable components into larger structures' },
      { key: 'C', text: 'A technique for optimizing database queries' },
      { key: 'D', text: 'A method of designing only mobile applications' },
    ],
    correctAnswer: 'B',
    explanation: 'Atomic Design organizes UI elements into levels such as atoms, molecules, organisms, templates, and pages. This makes components reusable, consistent, and easier to maintain across large products.',
  },
  {
    id: 2,
    category: 'UI Design Fundamentals',
    question: 'What is the main difference between good UI design and bad UI design?',
    options: [
      { key: 'A', text: 'Good UI always uses bright colors' },
      { key: 'B', text: 'Bad UI always has fewer features' },
      { key: 'C', text: 'Good UI is clear, consistent, accessible, and helps users complete tasks effectively' },
      { key: 'D', text: 'Good UI always contains animations' },
    ],
    correctAnswer: 'C',
    explanation: 'Good UI makes actions understandable and predictable. It uses appropriate visual hierarchy, consistency, feedback, and accessibility to help users complete their goals with less confusion.',
  },
  {
    id: 3,
    category: 'UI Design Fundamentals',
    question: 'What is the 60-30-10 rule in UI design?',
    options: [
      { key: 'A', text: 'A rule for dividing a page into three equal columns' },
      { key: 'B', text: 'A guideline for distributing a dominant color, a secondary color, and an accent color' },
      { key: 'C', text: 'A rule for setting font sizes to 60, 30, and 10 pixels' },
      { key: 'D', text: 'A rule for allocating 60% of a website to images' },
    ],
    correctAnswer: 'B',
    explanation: 'The 60-30-10 rule is a color-distribution guideline. Approximately 60% is the dominant color, 30% the secondary color, and 10% an accent. These proportions are flexible, not mandatory.',
  },
  {
    id: 4,
    category: 'UI Design Fundamentals',
    question: 'What is the difference between a design system and a style guide?',
    options: [
      { key: 'A', text: 'They are exactly the same thing' },
      { key: 'B', text: 'A style guide manages code, while a design system only manages images' },
      { key: 'C', text: 'A design system includes reusable components, design tokens, rules, and patterns, while a style guide mainly documents visual standards' },
      { key: 'D', text: 'A design system is only for mobile apps' },
    ],
    correctAnswer: 'C',
    explanation: 'A style guide typically documents typography, colors, icons, and visual rules. A design system is broader and may include the style guide, reusable components, interaction patterns, accessibility guidance, and implementation standards.',
  },
  {
    id: 5,
    category: 'UI Design Fundamentals',
    question: 'What is Progressive Disclosure, and how does it reduce cognitive load?',
    options: [
      { key: 'A', text: 'Showing every available option at the same time' },
      { key: 'B', text: 'Hiding all important information permanently' },
      { key: 'C', text: 'Presenting essential information first and revealing additional details when needed' },
      { key: 'D', text: 'Removing navigation from a website' },
    ],
    correctAnswer: 'C',
    explanation: 'Progressive Disclosure initially presents the information users need most. Additional controls or details appear when relevant, reducing clutter and helping users focus on the current task.',
  },
  {
    id: 6,
    category: 'UI Design Fundamentals',
    question: 'Which elements can help create a strong visual hierarchy in a user interface?',
    options: [
      { key: 'A', text: 'Typography, size, contrast, spacing, color, and positioning' },
      { key: 'B', text: 'Only background images' },
      { key: 'C', text: 'Only the number of buttons' },
      { key: 'D', text: 'Random placement of interface elements' },
    ],
    correctAnswer: 'A',
    explanation: 'Size, typography, contrast, spacing, color, and position guide users\' attention and communicate the relative importance of content and actions.',
  },

  // CATEGORY 2: UX Laws and Psychology
  {
    id: 7,
    category: 'UX Laws and Psychology',
    question: 'How can Fitts\'s Law improve button placement?',
    options: [
      { key: 'A', text: 'By making every button the same color' },
      { key: 'B', text: 'By placing important interactive targets where they are easy to reach and making them sufficiently large' },
      { key: 'C', text: 'By hiding buttons until users search for them' },
      { key: 'D', text: 'By increasing the number of buttons on each page' },
    ],
    correctAnswer: 'B',
    explanation: 'Fitts\'s Law predicts that target acquisition depends partly on target size and distance. Larger targets that are easier to reach generally take less time to select, especially on touchscreens.',
  },
  {
    id: 8,
    category: 'UX Laws and Psychology',
    question: 'How does Hick\'s Law affect user decision-making speed?',
    options: [
      { key: 'A', text: 'More choices always make decisions faster' },
      { key: 'B', text: 'Decision time is unrelated to the number of choices' },
      { key: 'C', text: 'Decision time generally increases as the number of relevant choices increases' },
      { key: 'D', text: 'It only applies to color selection' },
    ],
    correctAnswer: 'C',
    explanation: 'Hick\'s Law describes how decision time tends to increase with the number and complexity of choices. Clear grouping and prioritization can help users make decisions more efficiently.',
  },
  {
    id: 9,
    category: 'UX Laws and Psychology',
    question: 'According to Jakob\'s Law, how should designers account for user expectations?',
    options: [
      { key: 'A', text: 'Every website should use a completely unfamiliar layout' },
      { key: 'B', text: 'Designers should ignore conventions used by other products' },
      { key: 'C', text: 'Familiar patterns help users transfer expectations from other websites and applications' },
      { key: 'D', text: 'Every button should behave differently' },
    ],
    correctAnswer: 'C',
    explanation: 'Users spend much of their time using other digital products. Familiar navigation, icons, and interaction patterns reduce the learning effort required to use a new interface.',
  },
  {
    id: 10,
    category: 'UX Laws and Psychology',
    question: 'How can the Serial Position Effect inform mobile navigation design?',
    options: [
      { key: 'A', text: 'Place all important navigation items randomly' },
      { key: 'B', text: 'Consider placing the most important items at the beginning or end of a sequence' },
      { key: 'C', text: 'Always put the least important item first' },
      { key: 'D', text: 'Remove the navigation bar entirely' },
    ],
    correctAnswer: 'B',
    explanation: 'The Serial Position Effect describes people\'s tendency to remember items near the beginning and end of a sequence better than those in the middle. This can inform navigation prioritization, although placement should also consider usage data and platform conventions.',
  },
  {
    id: 11,
    category: 'UX Laws and Psychology',
    question: 'What does Tesler\'s Law, also called the Law of Conservation of Complexity, suggest?',
    options: [
      { key: 'A', text: 'Every application must have a complicated interface' },
      { key: 'B', text: 'Complexity can always be eliminated completely' },
      { key: 'C', text: 'Some complexity is inherent in a task, so designers should manage it rather than simply remove it' },
      { key: 'D', text: 'Users should handle all technical complexity themselves' },
    ],
    correctAnswer: 'C',
    explanation: 'Some tasks have unavoidable complexity. Designers should simplify the user experience where possible while recognizing that complexity must be handled somewhere in the system or workflow.',
  },
  {
    id: 12,
    category: 'UX Laws and Psychology',
    question: 'How can the Zeigarnik Effect inform user engagement design?',
    options: [
      { key: 'A', text: 'By showing users incomplete tasks and meaningful progress indicators' },
      { key: 'B', text: 'By hiding all progress information' },
      { key: 'C', text: 'By automatically completing every task' },
      { key: 'D', text: 'By removing reminders from workflows' },
    ],
    correctAnswer: 'A',
    explanation: 'The Zeigarnik Effect concerns people\'s tendency to remember interrupted or unfinished tasks. Progress indicators and clear next steps can encourage task completion, but they should support users rather than manipulate them.',
  },

  // CATEGORY 3: Accessibility and Inclusivity
  {
    id: 13,
    category: 'Accessibility and Inclusivity',
    question: 'What is the difference between Inclusive Design and Accessibility?',
    options: [
      { key: 'A', text: 'Accessibility and Inclusive Design have no relationship' },
      { key: 'B', text: 'Accessibility addresses barriers that prevent people with disabilities from using a product, while Inclusive Design is a broader approach that considers diverse people and circumstances' },
      { key: 'C', text: 'Inclusive Design focuses only on colors' },
      { key: 'D', text: 'Accessibility is only relevant to government websites' },
    ],
    correctAnswer: 'B',
    explanation: 'Accessibility focuses on making products usable by people with disabilities and meeting relevant accessibility requirements. Inclusive Design considers a wider range of human abilities, backgrounds, contexts, and needs. The approaches complement each other.',
  },
  {
    id: 14,
    category: 'Accessibility and Inclusivity',
    question: 'Why should designers follow WCAG guidelines?',
    options: [
      { key: 'A', text: 'They guarantee that a website will rank first in search engines' },
      { key: 'B', text: 'They automatically make every design visually attractive' },
      { key: 'C', text: 'They provide recognized criteria for making web content more accessible to people with disabilities' },
      { key: 'D', text: 'They eliminate the need for usability testing' },
    ],
    correctAnswer: 'C',
    explanation: 'The Web Content Accessibility Guidelines provide testable criteria for accessible web content, including perceivability, operability, understandability, and robustness. Legal obligations vary by jurisdiction, so WCAG should not be described as universally mandatory in every situation.',
  },
  {
    id: 15,
    category: 'Accessibility and Inclusivity',
    question: 'What should designers consider when creating interfaces for users with color-vision deficiencies?',
    options: [
      { key: 'A', text: 'Use color as the only way to communicate important information' },
      { key: 'B', text: 'Use red and green for every status without other indicators' },
      { key: 'C', text: 'Combine color with text, icons, patterns, and sufficient contrast' },
      { key: 'D', text: 'Remove all colors from the interface' },
    ],
    correctAnswer: 'C',
    explanation: 'Important information should not depend on color alone. Labels, icons, patterns, and adequate contrast help people distinguish states and understand content, including users with color-vision deficiencies.',
  },
  {
    id: 16,
    category: 'Accessibility and Inclusivity',
    question: 'What is a commonly recommended minimum touch-target size for accessible mobile interfaces?',
    options: [
      { key: 'A', text: '8 × 8 CSS pixels' },
      { key: 'B', text: '16 × 16 CSS pixels' },
      { key: 'C', text: '24 × 24 CSS pixels in WCAG 2.2 Level AA, subject to exceptions; 44 × 44 CSS pixels is a common larger design target' },
      { key: 'D', text: '100 × 100 CSS pixels in every situation' },
    ],
    correctAnswer: 'C',
    explanation: 'WCAG 2.2 Level AA includes a 24 × 24 CSS-pixel minimum target-size criterion with defined exceptions. Apple\'s 44 × 44-point guidance is a common platform design recommendation. Designers should account for spacing, platform conventions, and applicable accessibility requirements.',
  },

  // CATEGORY 4: Usability Testing and Research
  {
    id: 17,
    category: 'Usability Testing and Research',
    question: 'What is the main difference between qualitative and quantitative testing?',
    options: [
      { key: 'A', text: 'Qualitative testing explores experiences and reasons, while quantitative testing measures numerical outcomes and patterns' },
      { key: 'B', text: 'Qualitative testing only uses spreadsheets' },
      { key: 'C', text: 'Quantitative testing never uses metrics' },
      { key: 'D', text: 'Both methods always produce identical results' },
    ],
    correctAnswer: 'A',
    explanation: 'Qualitative research helps explain why users behave in particular ways through interviews, observations, and open-ended feedback. Quantitative research measures patterns using metrics such as task completion rate, time on task, and error rate. Combining both often provides a fuller picture.',
  },
  {
    id: 18,
    category: 'Usability Testing and Research',
    question: 'When and why is a Heuristic Evaluation performed?',
    options: [
      { key: 'A', text: 'Only after a product has been discontinued' },
      { key: 'B', text: 'When experts inspect an interface against established usability principles to identify potential problems' },
      { key: 'C', text: 'Only to test server performance' },
      { key: 'D', text: 'To replace every form of user research permanently' },
    ],
    correctAnswer: 'B',
    explanation: 'A Heuristic Evaluation is an expert inspection of an interface against usability principles, such as visibility of system status and consistency. It can identify usability issues early, but it does not replace testing with actual users.',
  },
  {
    id: 19,
    category: 'Usability Testing and Research',
    question: 'What is the difference between moderated and unmoderated usability testing?',
    options: [
      { key: 'A', text: 'Moderated testing always costs less' },
      { key: 'B', text: 'Unmoderated testing always produces more accurate results' },
      { key: 'C', text: 'Moderated testing involves a facilitator who can ask follow-up questions, while unmoderated testing allows participants to complete tasks independently' },
      { key: 'D', text: 'Neither method allows users to complete tasks' },
    ],
    correctAnswer: 'C',
    explanation: 'Moderated sessions provide opportunities to probe user behavior and clarify confusion but require more scheduling and facilitator time. Unmoderated testing can scale more easily and may be less expensive, but offers less opportunity for real-time follow-up.',
  },
  {
    id: 20,
    category: 'Usability Testing and Research',
    question: 'What are the key stages of a successful usability study?',
    options: [
      { key: 'A', text: 'Build a website, publish it, and assume it works' },
      { key: 'B', text: 'Define research goals, recruit appropriate participants, prepare realistic tasks, conduct sessions, analyze findings, and report actionable recommendations' },
      { key: 'C', text: 'Ask only friends whether they like the design' },
      { key: 'D', text: 'Collect feedback without defining any research questions' },
    ],
    correctAnswer: 'B',
    explanation: 'A structured usability study begins with clear goals and suitable participants, uses realistic tasks, collects observations and measurements, analyzes findings, and turns them into prioritized improvements.',
  },
  {
    id: 21,
    category: 'Usability Testing and Research',
    question: 'Why is the Jobs to Be Done (JTBD) framework useful in UX research?',
    options: [
      { key: 'A', text: 'It focuses only on the technical features of a product' },
      { key: 'B', text: 'It helps researchers understand the progress or outcome people want to achieve in a particular situation' },
      { key: 'C', text: 'It measures only website loading speed' },
      { key: 'D', text: 'It replaces the need to understand users' },
    ],
    correctAnswer: 'B',
    explanation: 'JTBD examines the underlying goal that motivates someone to use a product or service in a specific context. It helps teams focus on user outcomes rather than assuming that a feature alone solves the problem.',
  },
  {
    id: 22,
    category: 'Usability Testing and Research',
    question: 'How is Card Sorting used in Information Architecture?',
    options: [
      { key: 'A', text: 'To select the fastest programming language' },
      { key: 'B', text: 'To calculate a website\'s hosting cost' },
      { key: 'C', text: 'To understand how users group and label information, helping inform navigation and content structure' },
      { key: 'D', text: 'To measure the physical size of buttons' },
    ],
    correctAnswer: 'C',
    explanation: 'In Card Sorting, participants organize topics or content labels into groups that make sense to them. Open, closed, and hybrid approaches can help designers develop and evaluate navigation categories and information structures.',
  },

  // CATEGORY 5: UX Interviews and Case Studies
  {
    id: 23,
    category: 'UX Interviews and Case Studies',
    question: 'How should a UX designer approach a Whiteboard Challenge during an interview?',
    options: [
      { key: 'A', text: 'Start drawing immediately without clarifying the problem' },
      { key: 'B', text: 'Focus only on producing a visually polished screen' },
      { key: 'C', text: 'Clarify the problem, identify users and constraints, explore options, prioritize a solution, sketch the flow, and explain trade-offs' },
      { key: 'D', text: 'Avoid explaining design decisions' },
    ],
    correctAnswer: 'C',
    explanation: 'A structured approach demonstrates problem-solving and communication. Clarifying the problem, considering user needs, exploring alternatives, and explaining trade-offs are often more valuable than producing a polished visual design quickly.',
  },
  {
    id: 24,
    category: 'UX Interviews and Case Studies',
    question: 'A product feature has a low adoption rate. How should a UX designer investigate it?',
    options: [
      { key: 'A', text: 'Immediately remove the feature without collecting evidence' },
      { key: 'B', text: 'Assume users do not need the feature' },
      { key: 'C', text: 'Examine user needs, discoverability, onboarding, usability, analytics, and user feedback before testing improvements' },
      { key: 'D', text: 'Add more colors and animations without research' },
    ],
    correctAnswer: 'C',
    explanation: 'Low adoption can result from poor discoverability, unclear value, onboarding problems, usability barriers, or a mismatch with user needs. Researchers should combine behavioral data and user feedback, identify likely causes, and validate potential improvements.',
  },
  {
    id: 25,
    category: 'UX Interviews and Case Studies',
    question: 'How should a designer balance business goals and user needs when making design decisions?',
    options: [
      { key: 'A', text: 'Always prioritize short-term revenue regardless of user impact' },
      { key: 'B', text: 'Ignore business constraints completely' },
      { key: 'C', text: 'Identify shared outcomes, evaluate evidence, consider ethical and accessibility requirements, and test solutions that create sustainable value for both users and the business' },
      { key: 'D', text: 'Make decisions based only on personal preference' },
    ],
    correctAnswer: 'C',
    explanation: 'Strong design decisions consider user value, business objectives, feasibility, and long-term consequences. Research and experimentation can help teams find solutions that support both users and the organization without compromising accessibility or ethical standards.',
  },
];
