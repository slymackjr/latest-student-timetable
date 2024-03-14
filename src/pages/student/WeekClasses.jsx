import React from 'react';
import { StudentNav } from '../../components';

const WeekClasses = () => {
  // Dummy classes data
  const classesData = [
    { day_of_week: "Monday", module_name: "Mathematics", start_time: "08:00", end_time: "10:00", lecturer_name: "John Doe", room_name: "Room 101" },
    { day_of_week: "Tuesday", module_name: "Physics", start_time: "09:00", end_time: "11:00", lecturer_name: "Jane Smith", room_name: "Room 102" },
    { day_of_week: "Wednesday", module_name: "Biology", start_time: "10:00", end_time: "12:00", lecturer_name: "Sarah Johnson", room_name: "Room 103" },
    { day_of_week: "Thursday", module_name: "Chemistry", start_time: "11:00", end_time: "13:00", lecturer_name: "Michael Williams", room_name: "Room 104" },
    { day_of_week: "Friday", module_name: "History", start_time: "12:00", end_time: "14:00", lecturer_name: "David Brown", room_name: "Room 105" },
    // Add more dummy data as needed
  ];

  // Generate time slots from 7:00 to 19:00
  const timeSlots = [];
  for (let i = 7; i <= 19; i++) {
    timeSlots.push(`${i}:00 - ${i + 1}:00`);
  }

  return (
    <StudentNav activeTimetable={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4>Dashboard</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="card bg-secondary">
                    <div className="card-header">
                        <span><i className="bi bi-table me-2"></i></span> Classes  Weekly
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                        <div className="pb-3 d-flex justify-content-between">
                            <button type="button" className="btn btn-outline-info"><i className="bi bi-plus me-2"></i>Export PDF</button>
                        </div>
                        <table className="table table-bordered text-center table-striped">
                            <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">Time</th>
                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                                <th className="text-uppercase">Saturday</th>
                            </tr>
                            </thead>
                            <tbody>
                            {timeSlots.map((timeSlot, index) => (
                                <tr key={index}>
                                <td className="align-middle">{timeSlot}</td>
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                                    <td key={index}>
                                    {classesData.map((classData, dataIndex) => {
                                        const classStartTime = new Date(`2000-01-01T${classData.start_time}`);
                                        const classEndTime = new Date(`2000-01-01T${classData.end_time}`);
                                        const startTimeInRange = classStartTime <= new Date(`2000-01-01T${timeSlot.split(' - ')[0]}`);
                                        const endTimeInRange = classEndTime >= new Date(`2000-01-01T${timeSlot.split(' - ')[1]}`);
                                        if (classData.day_of_week === day && startTimeInRange && endTimeInRange) {
                                        return (
                                            <div key={dataIndex}>
                                            <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-primary font-size16 xs-font-size13">{classData.module_name}</span>
                                            <div className="margin-10px-top font-size14">{classData.start_time} - {classData.end_time}</div>
                                            <div className="font-size13 text-light-gray">{classData.lecturer_name}</div>
                                            <div className="font-size13 text-success">{classData.room_name}</div>
                                            </div>
                                        );
                                        }
                                        return null;
                                    })}
                                    </td>
                                ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </StudentNav>
  );
};

export default WeekClasses;
