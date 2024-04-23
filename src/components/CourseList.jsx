import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  console.log("courses CourseList:", courses);
  //   return (<div>Hello</div>)
  return (
    <React.Fragment>
      <ul>
        {courses &&
          courses.map((course) => (
            <React.Fragment key={course}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.completed ? "#07ff23" : "#1e1e1e",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span style={{ color: "#fff" }}> {course.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default CourseList;
