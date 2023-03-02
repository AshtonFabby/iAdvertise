import Link from "next/link";
import { useRouter } from "next/router";

const PaginationItem = (props) => {
  const router = useRouter();
  const pageNumber = props.pageNumber;
  const pageRoute = props.pageRoute;
  const maxPages = props.maxPages;
  return (
    <div className={"btn-group flex justify-center"}>
      {pageNumber > 1 ? (
        <Link href={`/${pageRoute}/${parseInt(pageNumber) - 1}`}>
          <button
            className={`btn btn-md bg-base-100 hover:bg-base-200 border-base-200 text-base-content `}
          >
            prev
          </button>
        </Link>
      ) : (
        <button
          className={`btn btn-md bg-base-100 btn-disabled border-base-200 text-base-content `}
        >
          first
        </button>
      )}

      <button className="btn btn-md normal-case bg-base-100 btn-disabled border-base-200 text-base-content">
        {pageNumber + " of " + maxPages}
      </button>
      {pageNumber < maxPages ? (
        <Link href={`/${pageRoute}/${parseInt(pageNumber) + 1}`}>
          <button className="btn btn-md bg-base-100 hover:bg-base-200 border-base-200 text-base-content">
            next
          </button>
        </Link>
      ) : (
        <button className="btn btn-md bg-base-100 btn-disabled border-base-200 text-base-content">
          last
        </button>
      )}
    </div>
  );
};

export default PaginationItem;
