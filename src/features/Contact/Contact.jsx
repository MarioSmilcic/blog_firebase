import { useContactForm } from "./hooks/useContactForm";
import TypewriterEffect from "../../components/TypewritterEffect/TyperwritterEffect";
import Button from "../../components/Button/Button";
import { contactInputs } from "../../data/app-data";
import "./contact.style.css";

const Contact = () => {
  const { register, handleSubmit, errors, onSubmit, isSubmitting } =
    useContactForm();

  return (
    <div className="contact">
      <h1>
        <TypewriterEffect text="Contact Us" speed={150} />
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          {contactInputs.map(({ type, placeholder, name, autoComplete }) => (
            <div key={name} className="input-group">
              {type === "textarea" ? (
                <textarea
                  placeholder={placeholder}
                  {...register(name)}
                  className={errors[name] ? "error" : ""}
                  disabled={isSubmitting}
                />
              ) : (
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name)}
                  className={errors[name] ? "error" : ""}
                  disabled={isSubmitting}
                  autoComplete={autoComplete}
                />
              )}
              {errors[name] && (
                <span className="error-text">{errors[name].message}</span>
              )}
            </div>
          ))}

          <Button
            type="submit"
            text={isSubmitting ? "Sending..." : "Send Message"}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
