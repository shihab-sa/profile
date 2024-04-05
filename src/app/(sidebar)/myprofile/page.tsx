import Link from "next/link";
export default function myProfileRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" mt-5 ml-5">
      <h1 className=" font-bold text-xl text-[#26235B]">MY PROFILE</h1>
      <div className=" flex items-center gap-5 mt-5">
        <Link href="/myprofile/editprofile" className=" text-xs text-[#565656]">
          Edit Profile
        </Link>
        <Link href="/myprofile/certificate" className=" text-xs text-[#565656]">
          Certificate
        </Link>
        <Link href="/myprofile/competition" className=" text-xs text-[#565656]">
          Competition
        </Link>
      </div>
      <div className=" mt-5">{children}</div>
    </div>
  );
}
