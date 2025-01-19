"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Profile from "@components/Profile";

const Myprofile = () => {
  useEffect(() => {
    const ProfileData = async () => {
  
      const response = await fetch('')

    };
  }, []);

  const handleEdit = () => {};

  const handleDelete = async () => {};

  return (
    <Profile
      name="My"
      desc="welcome to your personalized profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Myprofile;
