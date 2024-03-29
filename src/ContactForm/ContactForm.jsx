import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <br />
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label>
          Number
          <br />
          <Field type="text" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
