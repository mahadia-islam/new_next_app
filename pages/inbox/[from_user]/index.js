import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import { dummy_persons } from "../../../dummy_data/dummy_persons";
import Inbox from "../index";

const SpecificUserInbox = ({ filterUser }) => {
  const person = filterUser[0];

  return (
    <>
      <Inbox person={person} />
    </>
  );
};

export default SpecificUserInbox;

export async function getServerSideProps(context) {
  const { params } = context;

  const filterUser = dummy_persons.filter(
    (user) => user.username === params.from_user
  );

  return {
    props: {
      filterUser,
    }, // will be passed to the page component as props
  };
}

SpecificUserInbox.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
