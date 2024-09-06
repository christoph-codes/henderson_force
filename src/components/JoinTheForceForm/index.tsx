"use client";

import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { RadioGroup } from "../RadioGroup";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const defaultPersonalInfo = {
  "Full Name": "",
  nickname: "",
  address: "",
  "City / State / Zip": "",
  phone: "",
  email: "",
  dob: "",
  position: "",
  handed: "",
  "Current Team": "",
  "Responsible Parties": "", // eighteenOrOlder, Parent Support, Guardian Support, Other Support
  "Parent Details": {
    name: "",
    phone: "",
    email: "",
    relation: "",
  },
  "Guardian Details": {
    name: "",
    phone: "",
    email: "",
    relation: "",
  },
  "Other Support Details": {
    name: "",
    phone: "",
    email: "",
    relation: "",
  },
  "In Case of Emergency": "", // parent, guardian, other
};

export function JoinTheForceForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (
      !personalInfo["Full Name"] ||
      !personalInfo.address ||
      !personalInfo["City / State / Zip"] ||
      !personalInfo.phone ||
      !personalInfo.email ||
      !personalInfo.dob ||
      !personalInfo.position ||
      !personalInfo.handed ||
      !personalInfo["Current Team"] ||
      !personalInfo["Responsible Parties"] ||
      !personalInfo["In Case of Emergency"]
    ) {
      if (
        personalInfo["Responsible Parties"] === "Parent Support" &&
        !personalInfo["Parent Details"].name &&
        !personalInfo["Parent Details"].phone &&
        !personalInfo["Parent Details"].email &&
        !personalInfo["Parent Details"].relation
      ) {
        setError("All parent support fields are required.");
        return;
      }
      if (
        personalInfo["Responsible Parties"] === "Guardian Support" &&
        !personalInfo["Guardian Details"].name &&
        !personalInfo["Guardian Details"].phone &&
        !personalInfo["Guardian Details"].email &&
        !personalInfo["Guardian Details"].relation
      ) {
        setError("All guardian support fields are required.");
        return;
      }
      if (
        personalInfo["Responsible Parties"] === "Other Support" &&
        !personalInfo["Other Support Details"].name &&
        !personalInfo["Other Support Details"].phone &&
        !personalInfo["Other Support Details"].email &&
        !personalInfo["Other Support Details"].relation
      ) {
        setError("All other support fields are required.");
        return;
      }
      setError("Please fill out all required fields.");
      return;
    }
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: personalInfo,
          subject: "Join the Force",
        }),
      });
      await response.json();
      setSubmitted(true);
      setPersonalInfo(defaultPersonalInfo);
    } catch (error) {
      console.error("Join the Force Error: ", error);
      setError("An error occurred submitting your Join the Force Submission.");
    }
  };

  return (
    <form className="flex flex-col space-y-4 py-8" onSubmit={submit}>
      <h2 className="text-2xl font-semibold">Personal Information</h2>
      <Input
        value={personalInfo["Full Name"] as string}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            "Full Name": e.target.value,
          })
        }
        label="Full Name"
        type="text"
        name="fullName"
        placeholder="John Doe"
        required
      />
      <Input
        value={personalInfo.nickname as string}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            nickname: e.target.value,
          })
        }
        placeholder="JD"
        label="Nickname"
        type="text"
        name="nickname"
      />
      <Input
        value={personalInfo.address}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            address: e.target.value,
          })
        }
        placeholder="123 Main St."
        label="Address"
        type="text"
        name="address"
        required
      />
      <Input
        value={personalInfo["City / State / Zip"]}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            "City / State / Zip": e.target.value,
          })
        }
        placeholder="Las Vegas, NV 12345"
        label="City, State, Zip"
        type="text"
        name="cityStateZip"
        required
      />
      <Input
        value={personalInfo.phone}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            phone: e.target.value,
          })
        }
        placeholder="555-555-5555"
        label="Phone"
        type="tel"
        name="phone"
        required
      />
      <Input
        value={personalInfo.email}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            email: e.target.value,
          })
        }
        placeholder="john@doe.com"
        label="Email"
        type="email"
        name="email"
        required
      />
      <Input
        value={personalInfo.dob}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            dob: e.target.value,
          })
        }
        label="Date of Birth"
        type="date"
        name="dob"
        required
      />
      <Input
        value={personalInfo.position}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            position: e.target.value,
          })
        }
        placeholder="Goalie"
        label="Position"
        type="text"
        name="position"
        required
      />
      <Input
        value={personalInfo.handed}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            handed: e.target.value,
          })
        }
        placeholder="Right"
        label="Handed"
        type="text"
        name="handed"
        required
      />
      <Input
        value={personalInfo["Current Team"]}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            "Current Team": e.target.value,
          })
        }
        placeholder="Las Vegas Knights / AAA"
        label="Current Team / Level"
        type="text"
        name="currentTeam"
        required
      />
      <h2 className="text-2xl font-semibold">Responsible Parties</h2>

      <RadioGroup
        value={personalInfo["Responsible Parties"]}
        options={[
          {
            value: "18+",
            label: "I am over 18 years of age and do not receive any support.",
          },
          {
            value: "Parent Support",
            label: "I receive support from my parent(s).",
          },
          {
            value: "Guardian Support",
            label: "I receive support from a legal guardian.",
          },
          {
            value: "Other Support",
            label: "I receive support from other sources.",
          },
        ]}
        onChange={(radioValue) =>
          setPersonalInfo({
            ...personalInfo,
            "Responsible Parties": radioValue,
          })
        }
        label="Please choose the statement that best describes your situation?"
        name="responsibleParties"
      />
      <h2 className="text-2xl font-semibold">In Case of Emergency</h2>
      <RadioGroup
        value={personalInfo["In Case of Emergency"]}
        options={[
          {
            value: "Parent",
            label: "Parent(s)",
          },
          {
            value: "Guardian",
            label: "Guardian(s)",
          },
          {
            value: "Other",
            label: "Other(s)",
          },
        ]}
        onChange={(radioValue) =>
          setPersonalInfo({
            ...personalInfo,
            "In Case of Emergency": radioValue,
          })
        }
        label="Best Person to Contact in Case of Emergency?"
        name="incaseOfEmergency"
      />
      {(personalInfo["Responsible Parties"] === "Parent Support" ||
        personalInfo["In Case of Emergency"] === "Parent") && (
        <>
          <h2 className="text-2xl font-semibold">Parent Details</h2>
          <Input
            value={personalInfo["Parent Details"].name}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Parent Details": {
                  ...personalInfo["Parent Details"],
                  name: e.target.value,
                },
              })
            }
            label="Parent's Name"
            type="text"
            name="parentName"
            required
          />
          <Input
            value={personalInfo["Parent Details"].phone}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Parent Details": {
                  ...personalInfo["Parent Details"],
                  phone: e.target.value,
                },
              })
            }
            label="Parent's Phone"
            type="tel"
            name="parentPhone"
            required
          />
          <Input
            value={personalInfo["Parent Details"].email}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Parent Details": {
                  ...personalInfo["Parent Details"],
                  email: e.target.value,
                },
              })
            }
            label="Parent's Email"
            type="email"
            name="parentEmail"
            required
          />
          <Input
            value={personalInfo["Parent Details"].relation}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Parent Details": {
                  ...personalInfo["Parent Details"],
                  relation: e.target.value,
                },
              })
            }
            label="Relation"
            type="text"
            name="parentRelation"
            required
          />
        </>
      )}
      {(personalInfo["Responsible Parties"] === "Guardian Support" ||
        personalInfo["In Case of Emergency"] === "Guardian") && (
        <>
          <h2 className="text-2xl font-semibold">Guardian Details</h2>
          <Input
            value={personalInfo["Guardian Details"].name}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Guardian Details": {
                  ...personalInfo["Guardian Details"],
                  name: e.target.value,
                },
              })
            }
            label="Guardian's Name"
            type="text"
            name="guardianName"
            required
          />
          <Input
            value={personalInfo["Guardian Details"].phone}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Guardian Details": {
                  ...personalInfo["Guardian Details"],
                  phone: e.target.value,
                },
              })
            }
            label="Guardian's Phone"
            type="tel"
            name="guardianPhone"
            required
          />
          <Input
            value={personalInfo["Guardian Details"].email}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Guardian Details": {
                  ...personalInfo["Guardian Details"],
                  email: e.target.value,
                },
              })
            }
            label="Guardian's Email"
            type="email"
            name="guardianEmail"
            required
          />
          <Input
            value={personalInfo["Guardian Details"].relation}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Guardian Details": {
                  ...personalInfo["Guardian Details"],
                  relation: e.target.value,
                },
              })
            }
            label="Relation"
            type="text"
            name="guardianRelation"
            required
          />
        </>
      )}
      {(personalInfo["Responsible Parties"] === "Other Support" ||
        personalInfo["In Case of Emergency"] === "Other") && (
        <>
          <h2 className="text-2xl font-semibold">Other Support Details</h2>
          <Input
            value={personalInfo["Other Support Details"].name}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Other Support Details": {
                  ...personalInfo["Other Support Details"],
                  name: e.target.value,
                },
              })
            }
            label="Other Supports Name"
            type="text"
            name="Other SupportName"
            required
          />
          <Input
            value={personalInfo["Other Support Details"].phone}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Other Support Details": {
                  ...personalInfo["Other Support Details"],
                  phone: e.target.value,
                },
              })
            }
            label="Other Supports Phone"
            type="tel"
            name="Other SupportPhone"
            required
          />
          <Input
            value={personalInfo["Other Support Details"].email}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Other Support Details": {
                  ...personalInfo["Other Support Details"],
                  email: e.target.value,
                },
              })
            }
            label="Other Supports Email"
            type="email"
            name="Other SupportEmail"
            required
          />
          <Input
            value={personalInfo["Other Support Details"].relation}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                "Other Support Details": {
                  ...personalInfo["Other Support Details"],
                  relation: e.target.value,
                },
              })
            }
            label="Relation"
            type="text"
            name="Other SupportRelation"
            required
          />
        </>
      )}
      <hr className="border-gray-300 my-8" />
      {error && <p className="text-red-500">{error}</p>}

      {!submitted ? (
        <Button type="submit">Submit</Button>
      ) : (
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-4xl inline" />
          <h3>Thank You!</h3>
          <p>
            You will be contacted soon by a team representative. In the meantime
            follow us on social media for team updates.
          </p>
          <Link className="btn" href="/social">
            View Social Media
          </Link>
        </div>
      )}
    </form>
  );
}
