import React,{useState} from  'react'

function Work() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: ''
      });
      const [submittedData, setSubmittedData] = useState(null);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        // You can add further logic here to handle form submission, like sending data to a server
        // or performing any additional processing.
      };
    
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
              <div className="p-2">
            <div>
            <label htmlFor="name" className="w-5">Name</label>
            </div>
            <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '300px' }}
            />
            </div>
            </div>
            <div className="p-2">
            <div>
            <label htmlFor="email" className="w-5">Email</label>
            </div>
            <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '300px' }}
            />
            </div>
            </div>
            <div className="p-2">
            <div>
            <label htmlFor="experience" className="w-5">Experience</label>
            </div>
            <div>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              style={{ width: '300px' }}
            />
            </div>
            </div>
            <button
              type="submit"
              className=" btn btn-danger"
              style={{  fontSize: '1.2em' }}
            >
              Submit
            </button>
          </form>
          {submittedData && (
        <div>
          <h2 className="text-danger">DATA UPDATED</h2>
          <h3>You will be updated once a job is found.</h3>
        </div>
      )}
        </div>
      );
}

export default Work
