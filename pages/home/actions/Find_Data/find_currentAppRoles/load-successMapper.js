let desired_output = (employees_details) => {
    let unique_values = [
        ...new Set(employees_details.map((element) => element.role)),
    ];
    return unique_values;
};
return desired_output(data)