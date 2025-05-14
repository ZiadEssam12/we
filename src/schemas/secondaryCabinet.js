import * as yup from "yup";

export const secondaryCabinetSchema = yup.object().shape({
  central: yup.string().required("Central is required"),
  village: yup.string().required("Village is required"),
  port_gbon: yup.string().required("Port Gbon is required"),
  cabinet: yup.string().required("Cabinet is required"),
  splitter_number: yup.string().required("Splitter Number is required"),
  splitter_port: yup.string().required("Splitter Port is required"),
  distance: yup.string().required("Distance is required"),
  box_number: yup.string().required("Box Number is required"),
  cabinet_location: yup.string().required("Cabinet Location is required"),
  box_location: yup.string().required("Box Location is required"),
  cabinet_to_box_distance: yup
    .string()
    .required("Cabinet to Box Distance is required"),
  responsible: yup.string().nullable(),
  notes: yup.string().nullable(),
});

export const updateSecondaryCabinetSchema = yup.object().shape({
  central: yup.string(),
  village: yup.string(),
  port_gbon: yup.string(),
  cabinet: yup.string(),
  splitter_number: yup.string(),
  splitter_port: yup.string(),
  distance: yup.string(),
  box_number: yup.string(),
  cabinet_location: yup.string(),
  box_location: yup.string(),
  cabinet_to_box_distance: yup.string(),
  responsible: yup.string().nullable(),
  notes: yup.string().nullable(),
});
