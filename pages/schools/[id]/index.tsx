import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import SchoolService from "../../../services/school.services";
import Layout from "../../../components/layout";

function SchoolDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [school, setSchool] = useState<any>(null);

  //   retrieve school details
  const getSchool = async () => {
    const response = await SchoolService.retrieve(id);
    setSchool(response.data);
  };
  // delete school
  const deleteSchool = async () => {
    const response = await SchoolService.delete(id);
    router.push("/schools");
  };

  useEffect(() => {
    if (id) {
      getSchool();
    }
  }, [id]);
  return (
    <Layout>
      {school && (
        <>
          <Card>
            <Row>
              <Col md={6}>
                <Card.Img variant="top" src="/images/school.jpg" />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <h4>
                    {school.name} Located in {school.address}
                  </h4>
                  <Link href={`/schools/${id}/update`}>
                    <Button variant="primary" className="me-2">
                      Update School
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={deleteSchool}>
                    Delete School
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Row>
            <h4>Students List</h4>
          </Row>
        </>
      )}
    </Layout>
  );
}

export default SchoolDetails;
