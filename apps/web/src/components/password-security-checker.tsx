'use client';

import { useId, useState } from 'react';

export function PasswordSecurityChecker() {
  const id = useId();
  const [passwordValidity, setPasswordValidity] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const search = formData.get('search');
    const response = await fetch(`/api/validate-password?password=${search}`);
    const data = await response.text();
    setPasswordValidity(data);
  };

  return (
    <search className="p-2 border border-fuchsia-500 bg-violet-800 text-violet-50">
      <form method="get" action="/api/validate-password" onSubmit={onSubmit}>
        <label htmlFor={id}>Type a random password here to check it:</label>
        <input
          type="search"
          id={id}
          name="search"
          className="p-2 border border-fuchsia-500 bg-violet-800 text-violet-50 mx-3"
        />
        <button type="submit">Check</button>
      </form>
      <div>
        {passwordValidity && (
          <div className="p-2 border border-fuchsia-500 bg-violet-800 text-violet-50">
            {passwordValidity}
          </div>
        )}
      </div>
    </search>
  );
}
