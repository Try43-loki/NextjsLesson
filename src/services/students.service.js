export const getAllStudents = async () => {
  try {
    const res = await fetch(
      "https://6579da3c1acd268f9afa4236.mockapi.io/api/student",
      { next: { tags: ["student"] } }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const insertStudent = async (studentData) => {
  try {
    const res = await fetch(
      "https://6579da3c1acd268f9afa4236.mockapi.io/api/student",
      {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
