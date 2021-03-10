import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseCard = ({course, editCourse, deleteCourse}) => {

  const location = useLocation();

  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log("Current user", currentUser.role)
  console.log("Location", location)

  return (
    <div className="col-6 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.content}</p>
         {location.pathname === "/" && 
              <Link to={`/courses/${course.id}`}>See sessions</Link>
          || 
            <>
              <button onClick={(e) => editCourse(course.id)} type="type" >Update</button>
              <button onClick={(e) => deleteCourse(course.id)} type="button" >Delete</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default CourseCard