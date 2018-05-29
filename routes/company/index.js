export default function CompanyRoute(props) {
  const { company } = props;
  const { companyName } = company;
  return (
    <div>
      <div>{companyName}</div>
    </div>
  );
}
