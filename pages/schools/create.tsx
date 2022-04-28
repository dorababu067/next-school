import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SchoolService from "../../services/school.services";
import Layout from "../../components/layout";

function CreateSchool() {
  const [serverErrors, setServerErrors] = useState<any>({});
  const router = useRouter();
  const formik: any = useFormik({
    initialValues: {
      name: "",
      address: "",
    },

    onSubmit: async (values) => {
      try {
        // API call save the school data
        await SchoolService.create(values);
        router.push("/schools");
      } catch (error) {
        console.log(error);
        setServerErrors(error);
      }
    },
  });

  return (
    <Layout>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="name"
            value={formik.values.email}
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
            placeholder="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">
            {formik.errors && formik.errors.address && formik.errors.address}
            {serverErrors.address && serverErrors.address[0]}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add School
        </Button>
      </Form>
    </Layout>
  );
}

export default CreateSchool;
