"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";


type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, open, route, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
//   const { user } = useSelector((state: any) => state.auth);
//   const { data } = useSession();
//   const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logOut, setLogOut] = useState(false);
//   const {} = useLogOutQuery(undefined, { skip: !logOut ? true : false });

//   useEffect(() => {
//     if (!user) {
//       socialAuth({
//         email: data?.user?.email,
//         name: data?.user?.name,
//         avatar: data?.user?.image,
//       });
//     }
//     if (data == null) {
//       if (isSuccess) {
//         toast.success("Login Successfully");
//       }
//     }
//     if (data === null) {
//       setLogOut(true);
//     }
//   }, [data, user]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
              >
                e-Shikhon
              </Link>
            </div>
            <div className="flex items-center">
              {/* <NavItems activeItem={activeItem} isMobile={false} /> */}
              {/* <ThemesSwitcher /> */}
              {/* Only for mobile device */}
              <div className="800px:hidden">
                {/* <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                /> */}
              </div>
              {/* {user ? (
                <Link href={"/profile"}>
                  <Image
                    className="w-[30px] h-[30px] rounded-full"
                    alt=""
                    width={30}
                    height={30}
                    src={user.avatar ? user.avatar.url : ''}
                    style={{
                      border: activeItem === 5 ? "2px solid #ffc107" : "none",
                    }}
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={25}
                  className="hidden 800px:block cursor-pointer dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              )} */}
            </div>
          </div>
        </div>
        {/* Mobile sidbar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 ">
              {/* <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                onClick={() => setOpen(true)}
              /> */}
              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                Copuright @ 2024 e-hikhon
              </p>
            </div>
          </div>
        )}
      </div>

      {/* {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )} */}

      {/* {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )} */}

      {/* {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )} */}
    </div>
  );
};

export default Header;
