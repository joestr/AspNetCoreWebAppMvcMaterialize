# Data

This project is the persistance layer of a given application.  
It utilises *.NET Entity Framework Core*.

## Install dependencies

1. Install the .NET Core EF tools with `dotnet tool install --global dotnet-ef`
2. Install the .NET Entity Framework Core Design package to the project with `dotnet add package Microsoft.EntityFrameworkCore.Design`
3. Update the .NET Core EF tools with `dotnet tool update --global dotnet-ef`

## Intial usage

Create an initial migration with following command:  
`dotnet ef migrations add InitialCreate`

This creates a *Migrations* folder in the current project.

Use the commnad `dotnet ef database update` to intially create the database schema.

## Update usage

If the model has been modified run the command `dotnet ef migrations add MigrationName`.

To apply the new schema to the database use the command `dotnet ef database update`.

## Aditional information

Find addiotional information about this process [here](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli).