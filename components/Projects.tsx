import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ProjectData } from "@/lib/Constant";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProjectsPage() {
	return (
		<div className="mx-auto mt-4">
			<hr />
			<h4 className="my-4 font-medium text-md md:text-xl"> Projects</h4>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{ProjectData.map(
					({ title, description, techstack }, index) => (
						<Card key={index} className="p-4">
							<div className="flex items-start justify-between mb-2">
								<h4 className="font-medium text-md">{title}</h4>
							</div>
							<p className="mb-2 text-sm text-gray-600 dark:text-neutral-400">
								{description}
							</p>
							<div className="flex flex-wrap gap-1">
								{techstack.map((tech, index) => (
									<Badge
										key={index}
										variant="outline"
										className="text-xs px-2 py-0.5 text-gray-600 dark:text-neutral-400">
										{tech}
									</Badge>
								))}
							</div>
						</Card>
					),
				)}
			</div>
		</div>
	);
}

export default ProjectsPage;
