import { Outlet } from "react-router-dom";

function AuthLayout() {
    return ( 
        <div className="flex min-h-screen w-full">
          <div className="flex items-center justify-center bg-black w-full lg:w-1/2 px-12"> {/* Changed hidden to flex for visibility */}
            <div className="max-w-md space-y-6 text-center text-white"> {/* Ensuring text is white */}
              <h1 className="text-4xl font-extrabold tracking-tight">
                  Welcome to Filly's E-commerce Shopping
              </h1>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 lg:px-8">
            <Outlet />
          </div>
        </div>
     );
}

export default AuthLayout;
