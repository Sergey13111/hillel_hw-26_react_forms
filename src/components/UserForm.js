import { useForm } from "react-hook-form";

const UserForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        first name: 
        <input type="text" {...register("firstName", {required: true})} />
        {errors.firstName && <span>This field is required</span>}
      </label>
      <label>
        last name: 
        <input type="text" {...register("lastName", {required: true})} />
        {errors.lastName && <span>This field is required</span>}
      </label>
      <label>
        country: 
        <select {...register("country")}>
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="Germany">Germany</option>
        </select>
      </label>
      <div className="btn">
        <button type="submit">submit</button>
      <button type="reset">reset</button>
      </div>
    </form>
  );
};

export default UserForm;