--How many people work in the Sales department?
SELECT COUNT(e.emp_name) FROM employee e 
INNER JOIN department d on d.id = e.department
WHERE d.dept_name = 'Sales';

--List the names of all employees assigned to the 'Plan Christmas party' project.
SELECT e.emp_name FROM employee e
INNER JOIN employee_project ep on ep.emp_id = e.id
INNER JOIN project p on p.id = ep.project_id
WHERE p.project_name = 'Plan christmas party';

--List the names of employees from the Warehouse department that are assigned to the 'Watch paint dry' project.
SELECT e.emp_name FROM employee e
INNER JOIN employee_project ep on ep.emp_id = e.id
INNER JOIN project p on p.id = ep.project_id
INNER JOIN department d on d.id = e.department
WHERE p.project_name = 'Watch paint dry' AND d.dept_name = 'Warehouse';

--Which projects are the Sales department employees assigned to?
SELECT DISTINCT p.project_name FROM project p
INNER JOIN employee_project ep on ep.project_id = p.id
INNER JOIN employee e on ep.emp_id = e.id
INNER JOIN department d on d.id = e.department
WHERE d.dept_name = 'Sales';

--List only the managers that are assigned to the 'Watch paint dry' project.
SELECT e.emp_name FROM employee e
INNER JOIN employee_project ep on ep.emp_id = e.id
INNER JOIN project p on p.id = ep.project_id
INNER JOIN department d on d.manager = e.id
WHERE p.project_name = 'Watch paint dry';