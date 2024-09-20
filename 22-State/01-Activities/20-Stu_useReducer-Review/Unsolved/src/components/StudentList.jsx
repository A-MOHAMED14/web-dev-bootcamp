import { useState } from "react";

import { ADD_STUDENT, REMOVE_STUDENT, ADD_MAJOR } from "../utils/actions";

import { useStudentContext } from "../utils/StudentContext";

export default function StudentList() {
  const [state, dispatch] = useStudentContext();

  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentMajor, setNewStudentMajor] = useState("");

  // TODO: Add a comment explaining what this state variable will be used for after reviewing it's use in the app
  // Local state variable that will be used to hold the new major before it gets dispatched to the reducer
  const [newMajorName, setNewMajorName] = useState("");

  return (
    <div>
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          console.log("StudentList.js: Dispatched remove!");
                          // TODO: Add a comment explaining the functionality of the REMOVE_STUDENT action when it hits the reducer
                          // takes a student ID as payload
                          // finds student based on ID and removes the targeted student via filter() method
                          // updates student array
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <form
              className="add-student"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("StudentList.js: Dispatched add student! ");
                dispatch({
                  type: ADD_STUDENT,
                  payload: { name: newStudentName, major: newStudentMajor },
                });

                setNewStudentName("");
                setNewStudentMajor("");
              }}
            >
              <input
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* //TODO: Add a commenting explaining what will happen if a major is added to the "Majors" array */}
                {/* The Majors array in the global state will update and newly added major will be reflected on the view when component is re-rendered */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              {console.log(state.majors)}
              <button type="submit">Add Student</button>
            </form>
            <h3>Add a New Major</h3>
            <form
              className="add-major"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("StudentList.js: Dispatched add major! ");
                // TODO: Explain what happens when the ADD_MAJOR action is dispatched to the reducer with a new major
                // takes a string as name of new major to be added
                // pushes new major to end of copy of majors array
                // updates majors array
                dispatch({
                  type: ADD_MAJOR,
                  payload: newMajorName,
                });

                setNewMajorName("");
              }}
            >
              {/* //TODO: Does the setNewMajorName method affect local state or global state the way it is used in this onChange event */}
              {/* Local state, as it is using a useSate react hook */}
              <input
                value={newMajorName}
                onChange={(e) => setNewMajorName(e.target.value)}
                placeholder="New major name..."
                type="text"
                style={{ padding: "10px", marginRight: "5px" }}
              />
              <button type="submit">Add Major</button>
            </form>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
