import TeamComponent from "../../Components/TeamComponent";
import React from "react";
import { getTeamMembersService } from "../../services/product.service";
export default async function TeamPage() {
  const teamData = await getTeamMembersService();
  return (
    <>
      <TeamComponent teamData={teamData} />
    </>
  );
}
