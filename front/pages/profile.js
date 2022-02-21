import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const follwerList = [
    { nickname: "장유진" },
    { nickname: "이홍규" },
    { nickname: "김정유" },
  ];
  const follwingList = [
    { nickname: "임하정" },
    { nickname: "김보근" },
    { nickname: "이재윤" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로우 목록" data={follwerList} />
        <FollowList header="팔로잉 목록" data={follwingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
