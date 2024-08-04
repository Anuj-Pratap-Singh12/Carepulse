
import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function  NewAppointment({ params : {userId}}: SearchParamProps) {

  const patient = await getPatient(userId);
  return (
    <>
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[800px]">
          <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"/>

          <AppointmentForm 
           type = "create"
           userId = {userId}
           patientId = {patient.$id}/>

            <p className="copyright mt-10 py-12">
           © 2024 CarePulse
           </p>
        </div>
      </section>

      <Image
      src= "/assets/images/appointment-img.png"
      width={1000}
      height={1000}
      alt="patient"
      className="side-img max-w-[390px] bg-bottom"/>
    </div>
    </>
  );
}
