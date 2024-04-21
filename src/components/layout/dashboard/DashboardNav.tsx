import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from '@/components/ui/input'
import { Search, X, AlignJustify, PieChart, BookOpen, BookText, ShoppingBag, Users, MessageCircle, UserCircle, LogOut } from 'lucide-react'
import NotificationModal from './NotificationModal'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'


const notifications = {
  count: 2,
  results: [
      {
          id: 1,
          message: "New message from admin",
          is_read: false,
          created_at: "2022-02-02T12:00:00Z",
      },
      {
          id: 2,
          message: "New message from admin",
          is_read: false,
          created_at: "2022-02-02T12:00:00Z",
      },
  ],
}



type Props = {
  page: string;
  toggleSideBar: boolean;
  setToggleSideBar: (toggleSideBar: boolean) => void;
};


const DashboardNav = ({page, toggleSideBar, setToggleSideBar}: Props) => {
  const router = useRouter();
  const { route } = useRouter();

  const handleLogout = () => {
    router.push("/");
  }

  const handleToggleSidebar = () => setToggleSideBar(!toggleSideBar);


  return (
    <>
      <nav className="fixed top-0 z-40 w-full  px-5 py-6 text-black md:px-10 lg:py-4 border-b">
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">{page}</h1>
          </div>

          <div>
            <div className="hidden items-center space-x-20 lg:flex">
              <div className="inline-flex items-center space-x-4">
                <Search size="20" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-96"
                />
              </div>

              <NotificationModal
                notifications={notifications}
                notificationRefetch={() => {}}
               />
            </div>
          </div>
        </div>

        <div className="flex cursor-pointer items-center lg:hidden">
          <div>
              <Search size="20" />
              <Input
                type="text"
                placeholder="Search"
                className="w-96"
              />
          </div>
          <div className="ml-4">
            <NotificationModal
              notifications={notifications}
              notificationRefetch={() => {}}
            />
          </div>

          <div onClick={handleToggleSidebar}>
                {toggleSideBar ? (
                  <span>
                    <X />
                  </span>
                ) : (
                  <span>
                    <AlignJustify />
                  </span>
                )}
              </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <aside
        className={`transition-width fixed z-40 flex h-screen bg-[#fff] shadow-lg duration-300 ease-in-out lg:hidden`}
      >
        {toggleSideBar && (
          <>
            <ul className="w-60 pt-20 text-[#959190]">
              <Link href="/dashboard/admin/account">
                <li
                  className={
                    route === "/dashboard/admin/account"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                    <div className="flex items-center">
                      <span className="mr-3">
                        <PieChart size="20" />
                      </span>
                      Home
                    </div>
                  </li>
              </Link>

              <Link href="/dashboard/admin/courses">
                <li
                  className={
                    route === "/dashboard/admin/courses"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <BookOpen size="20" />
                    </span>
                    Courses
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/subscription-plans">
                <li
                  className={
                    route === "/dashboard/admin/subscription-plans"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <BookText size="20" />
                    </span>
                    Subscription Plans
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/transactions">
                <li
                  className={
                    route === "/dashboard/admin/transactions"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <BookText size="20" />
                    </span>
                    Transactions
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/tutors">
                <li
                  className={
                    route === "/dashboard/admin/tutors"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <ShoppingBag size="20" />
                    </span>
                    Tutors
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/students">
                <li
                  className={
                    route === "/dashboard/admin/students"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <Users size="20" />
                    </span>
                    Students
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/assignments">
                <li
                  className={
                    route === "/dashboard/admin/assignments"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <MessageCircle size="20" />
                    </span>
                    Assignments
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/chat-forum">
                <li
                  className={
                    route === "/dashboard/admin/chat-forum"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <MessageCircle size="20" />
                    </span>
                    Chat Forum
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/support">
                <li
                  className={
                    route === "/dashboard/admin/support"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-white"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <UserCircle size="20" />
                    </span>
                    Support
                  </div>
                </li>
              </Link>
            </ul>

            <div
                className="fixed bottom-10 pl-10 text-[#959190]"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center" onClick={handleLogout}>
                  <span className="mr-3">
                    <LogOut size="20" color="#D2322D" />
                  </span>
                  logout
                </div>
              </div>
          </>
        )}
      </aside>
    </>
  )
}

export default DashboardNav