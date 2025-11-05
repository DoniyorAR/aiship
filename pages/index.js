// pages/index.js
export async function getServerSideProps() {
  return { redirect: { destination: '/overall', permanent: false } };
}
export default function Index() { return null; }
