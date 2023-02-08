import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";

import Image01 from "../images/user-28-01.jpg";
import Image02 from "../images/user-28-02.jpg";
import Image03 from "../images/user-28-03.jpg";
import Image04 from "../images/user-28-04.jpg";
import Image05 from "../images/user-28-05.jpg";
import Image06 from "../images/user-28-06.jpg";
import Image07 from "../images/user-28-07.jpg";
import Image08 from "../images/user-28-08.jpg";
import Image09 from "../images/user-28-09.jpg";
import Image10 from "../images/user-28-10.jpg";
import Image11 from "../images/user-28-11.jpg";
import Image12 from "../images/user-28-12.jpg";
import CampaignsCard from "../partials/campaigns/CampaignsCard";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    {
      id: 0,
      category: "1",
      members: [
        {
          name: "User 01",
          image: Image01,
          link: "#0",
        },
        {
          name: "User 02",
          image: Image02,
          link: "#0",
        },
        {
          name: "User 03",
          image: Image03,
          link: "#0",
        },
      ],
      title: "Pandacola",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "One-Time",
    },
    {
      id: 1,
      category: "2",
      members: [
        {
          name: "User 04",
          image: Image04,
          link: "#0",
        },
        {
          name: "User 05",
          image: Image05,
          link: "#0",
        },
      ],
      title: "Objetrama",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "Off-Track",
    },
    {
      id: 3,
      category: "3",
      members: [
        {
          name: "User 07",
          image: Image07,
          link: "#0",
        },
        {
          name: "User 08",
          image: Image08,
          link: "#0",
        },
        {
          name: "User 09",
          image: Image09,
          link: "#0",
        },
      ],
      title: "Pepite",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "At Risk",
    },
    {
      id: 4,
      category: "1",
      members: [
        {
          name: "User 10",
          image: Image10,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "At Risk",
    },
    {
      id: 5,
      category: "4",
      members: [
        {
          name: "User 11",
          image: Image11,
          link: "#0",
        },
        {
          name: "User 05",
          image: Image05,
          link: "#0",
        },
        {
          name: "User 12",
          image: Image12,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "One-Time",
    },
    {
      id: 6,
      category: "2",
      members: [
        {
          name: "User 07",
          image: Image07,
          link: "#0",
        },
        {
          name: "User 04",
          image: Image04,
          link: "#0",
        },
        {
          name: "User 11",
          image: Image11,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "At Risk",
    },
    {
      id: 7,
      category: "4",
      members: [
        {
          name: "User 01",
          image: Image01,
          link: "#0",
        },
        {
          name: "User 02",
          image: Image02,
          link: "#0",
        },
        {
          name: "User 06",
          image: Image06,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "One-Time",
    },
    {
      id: 8,
      category: "1",
      members: [
        {
          name: "User 09",
          image: Image09,
          link: "#0",
        },
        {
          name: "User 01",
          image: Image01,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "Off-Track",
    },
    {
      id: 9,
      category: "3",
      members: [
        {
          name: "User 07",
          image: Image07,
          link: "#0",
        },
        {
          name: "User 08",
          image: Image08,
          link: "#0",
        },
        {
          name: "User 09",
          image: Image09,
          link: "#0",
        },
        {
          name: "User 06",
          image: Image06,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "One-Time",
    },
    {
      id: 10,
      category: "4",
      members: [
        {
          name: "User 06",
          image: Image06,
          link: "#0",
        },
        {
          name: "User 11",
          image: Image11,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "Off-Track",
    },
    {
      id: 11,
      category: "2",
      members: [
        {
          name: "User 05",
          image: Image05,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "Off-Track",
    },
    {
      id: 12,
      category: "3",
      members: [
        {
          name: "User 07",
          image: Image07,
          link: "#0",
        },
        {
          name: "User 08",
          image: Image08,
          link: "#0",
        },
        {
          name: "User 09",
          image: Image09,
          link: "#0",
        },
      ],
      title: "Monitor progress in Real Time Value",
      link: "#0",
      content:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",
      dates: {
        from: "Jan 20",
        to: "Jan 27",
      },
      type: "At Risk",
    },
  ];

  return (
    <div className="flex overflow-hidden h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            {/* Welcome banner */}
            <WelcomeBanner />
            <div className="grid grid-cols-12 gap-6 mb-8">
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
            </div>

            {/* Dashboard actions */}
            <div className="mb-8 sm:flex sm:justify-between sm:items-center">
              {/* Right: Actions */}
              <div className="grid grid-flow-col gap-2 justify-start sm:auto-cols-max sm:justify-end">
                {/* Filter button */}
                <FilterButton align="left" />
                {/* Datepicker built with flatpickr */}
                <Datepicker align="left" />
                {/* Add view button */}
                <button className="text-white bg-indigo-500 btn hover:bg-indigo-600">
                  <svg
                    className="w-4 h-4 opacity-50 fill-current shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden ml-2 xs:block">Add View</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Table (website card) */}
              {items.map((item) => {
                return (
                  <CampaignsCard
                    key={item.id}
                    id={item.id}
                    category={item.category}
                    members={item.members}
                    title={item.title}
                    link={item.link}
                    content={item.content}
                    dates={item.dates}
                    type={item.type}
                  />
                );
              })}

              {/* Card (Recent Activity) */}
              <DashboardCard10 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
