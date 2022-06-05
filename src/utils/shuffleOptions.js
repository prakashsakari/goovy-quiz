export const shuffleOptions = (qns, index) => {
  /** Function takes an array of questions and options and the current index and returns an array of shuffled options */
    const shuffleAnswer = qns && qns.length > 0 && [qns[index]?.correct_answer, ...qns[index]?.incorrect_answers].sort(() => Math.random() - 0.5);
    return shuffleAnswer;
  };