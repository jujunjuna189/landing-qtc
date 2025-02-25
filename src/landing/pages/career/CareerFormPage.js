import { Button, FieldArea, FieldEmail, FieldSelectDropDown, FieldText, FileFileArea } from "../../components";
import { UseCareerFormContext } from "../../contexts/career/CareerFormContext";

const CareerFormPage = () => {
    const { controller, errors, onSave, onSetController } = UseCareerFormContext();

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center overflow-y-auto pt-10">
            <div className="w-[30%]">
                <div className="flex flex-col">
                    <span className="font-semibold uppercase">Import Your Profile</span>
                    <small>You can import your information.</small>
                </div>
                <div className="mt-4">
                    <FileFileArea error={errors.resume} onChange={(value) => onSetController({ field: 'resume', value: value })} className="h-[10rem]" placeholder="Resume" />
                </div>
                <div className="flex flex-col mt-4">
                    <span className="font-semibold uppercase">Contact Information</span>
                    <small>Please enter your contact information.</small>
                </div>
                <div className="mt-2">
                    <span>First Name</span>
                    <FieldText value={controller.first_name} error={errors.first_name} onChange={(value) => onSetController({ field: 'first_name', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Middle Name</span>
                    <FieldText value={controller.middle_name} error={errors.middle_name} onChange={(value) => onSetController({ field: 'middle_name', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Last Name</span>
                    <FieldText value={controller.last_name} error={errors.last_name} onChange={(value) => onSetController({ field: 'last_name', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Email</span>
                    <FieldEmail value={controller.email} error={errors.email} onChange={(value) => onSetController({ field: 'email', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Phone Number</span>
                    <FieldText value={controller.phone_number} error={errors.phone_number} onChange={(value) => onSetController({ field: 'phone_number', value: value })} />
                </div>
                <div className="flex flex-col mt-4">
                    <span className="font-semibold uppercase">Deversity Information</span>
                </div>
                <div className="mt-2">
                    <span>Gender</span>
                    <FieldSelectDropDown data={[{ title: 'Laki-Laki', value: 'Laki-Laki' }, { title: 'Perempuan', value: 'Perempuan' }]} error={errors.gender} placeholder="Choose..." value={controller?.gender?.value} onChange={(value) => onSetController({ field: 'gender', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Marital Status</span>
                    <FieldSelectDropDown data={[{ title: 'Single', value: 'Single' }, { title: 'Married', value: 'Married' }]} placeholder="Choose..." error={errors.marital_status} value={controller?.marital_status?.value} onChange={(value) => onSetController({ field: 'marital_status', value: value })} />
                </div>
                <div className="flex flex-col mt-4">
                    <span className="font-semibold uppercase">Address</span>
                    <small>Please enter your home address.</small>
                </div>
                <div className="mt-2">
                    <span>Country</span>
                    <FieldText value={controller.country} error={errors.country} onChange={(value) => onSetController({ field: 'country', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Province</span>
                    <FieldText value={controller.province} error={errors.province} onChange={(value) => onSetController({ field: 'province', value: value })} />
                </div>
                <div className="mt-2">
                    <span>City</span>
                    <FieldText value={controller.city} error={errors.city} onChange={(value) => onSetController({ field: 'city', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Full Address</span>
                    <FieldArea rows={4} value={controller.address} error={errors.address} onChange={(value) => onSetController({ field: 'address', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Current Address</span>
                    <FieldArea rows={4} value={controller.current_location} error={errors.current_location} onChange={(value) => onSetController({ field: 'current_location', value: value })} />
                </div>
                <div className="mt-2">
                    <span>Postal Code</span>
                    <FieldText value={controller.postal_code} error={errors.postal_code} onChange={(value) => onSetController({ field: 'postal_code', value: value })} />
                </div>
                <div className="flex flex-col mt-4">
                    <span className="font-semibold uppercase">Support Documents</span>
                </div>
                <div className="mt-4">
                    <FileFileArea className="h-[10rem]" placeholder="Document, PDF or Other File" error={errors.support_document} onChange={(value) => onSetController({ field: 'support_document', value: value })} />
                </div>
                <Button className="hover:bg-slate-100 relative text-white-light justify-center mt-2" onClick={() => onSave()}>
                    <span>Submit</span>
                </Button>
                <div className="h-[10rem]" />
            </div>
        </div>
    );
}

export default CareerFormPage;