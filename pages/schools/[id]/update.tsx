import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import SchoolService from "../../../services/school.services";
import Layout from "../../../components/layout";


function CreateSchool() {
  const router = useRouter();
  const { id } = router.query;
  const [school, setSchool] = useState<any>(null);
  const [serverErrors, setServerErrors] = useState<any>({});

  //   retrieve school details
  const getSchool = async () => {
    const response = await SchoolService.retrieve(id);
    console.log(response.data);
    setSchool(response.data);
  };

  useEffect(() => {
    if (id) {
      getSchool();
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      name: school?.name,
      address: school?.address,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        // API call save the school data
        await SchoolService.update(id, values);
        router.push(`/schools`);
      } catch (error) {
        console.log(error);
        setServerErrors(error);
      }
    },
  });

  return (
    <Layout>
      {console.log(school)}

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formik.values.name || ""}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">
            {formik.errors && formik.errors.name && formik.errors.name}
            {serverErrors.name && serverErrors.name[0]}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            name="address"
            value={formik.values.address || ""}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">
            {formik.errors && formik.errors.address && formik.errors.address}
            {serverErrors.address && serverErrors.address[0]}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          update
        </Button>
      </Form>
    </Layout>
  );
}

export default CreateSchool;
