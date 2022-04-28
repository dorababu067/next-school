import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "../../components/layout";
import SchoolService from "../../services/school.services";

function Schools() {
  const [schools, setSchools] = useState<any>(null);

  // get all schools
  const getSchools = async () => {
    try {
      const response:any = await SchoolService.list();
      console.log(response);
      setSchools(response.data);
    } catch (error:any) {
      console.log(error.response, "error");
    }
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <Layout>
      <div className="mt-5">
        <div className="d-flex">
          <Link href="schools/create">
            <Button variant="primary" className="ms-auto">
              Add School
            </Button>
          </Link>
        </div>
        <ol>
          <h5> {schools &&
            schools.map((school:any) => (
              <li key={school.id}>
               <Link href={`schools/${school.id}`}>{school.name}</Link>
              </li>
            ))}
          </h5>
        </ol>
      </div>
    </Layout>
  );
}

export default Schools;
