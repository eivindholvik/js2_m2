console.log(
  [
    {
      numberOfStudents: 23,
      numberOfTeachers: 2,
      isCamping: true,
      numTeachersCamping: 0,
    },
    {
      numberOfStudents: 17,
      numberOfTeachers: 1,
      isCamping: true,
      numTeachersCamping: 1,
    },
    {
      numberOfStudents: 33,
      numberOfTeachers: 4,
      isCamping: false,
      numTeachersCamping: 0,
    },
    {
      numberOfStudents: 25,
      numberOfTeachers: 3,
      isCamping: true,
      numTeachersCamping: 2,
    },
    {
      numberOfStudents: 19,
      numberOfTeachers: 1,
      isCamping: true,
      numTeachersCamping: 1,
    },
  ].reduce(
    (prev, current) => {
      if (!current.isCamping) return prev;
      // if (current.numTeachersCamping === 0) return prev;
      prev.numStu += current.numberOfStudents;
      prev.numTeach += current.numTeachersCamping;
      return prev;
    },
    { numStu: 0, numTeach: 0 }
  )
);
